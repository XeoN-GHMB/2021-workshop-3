_F='GET'
_E='failed'
_D='POST'
_C=True
_B=False
_A=None
from js import eval as jseval,self as web_self,Blob,URL
import os,sys,json,string,random,csv
from io import StringIO
def request(url,params=_A,jsonResult=_C,whitelist=('/list','/view')):
	A=url
	if not A.startswith('/'):return _A
	C=_B
	for D in whitelist:
		if D in A:C=_C;break
	if not C:return _A
	A='/json'+A;B=SimpleNetwork().request(A,params)
	if B.status==_E:return B.status
	if not jsonResult:return B.result
	return json.loads(B.result)
class requestList:
	def __init__(A,url,params=_A,maxRequests=999):A.url=url;A.params=params or{};A.maxRequests=maxRequests;A.currentList=[];A.requests=0;A.cursor=_A;A.started=_B
	def requestData(A):
		C='cursor';A.requests+=1
		if A.cursor:A.params[C]=A.cursor
		B=request(A.url,A.params)
		if not B:return
		A.cursor=_A if B[C]==A.cursor else B[C];A.currentList=B['skellist']
	def next(A):
		if A.requests>A.maxRequests:return _B
		if A.currentList:return A.currentList.pop(0)
		if not A.cursor:return _B
	def running(A):
		if not A.currentList:A.requestData()
		if A.requests>A.maxRequests:return _B
		if not A.started and A.requests==0:A.started=_C;return _C
		if A.currentList:return _C
		if A.cursor:return _C
		return _B
class csvWriter:
	delimiter=';'
	def __init__(A,delimiter=';'):A.delimiter=delimiter;A.file=StringIO();A.writer=csv.writer(A.file,delimiter=A.delimiter,dialect='excel',quoting=csv.QUOTE_ALL);A.file.write('\ufeff')
	def writeRow(C,row):
		A=row
		for (D,B) in enumerate(A):
			if isinstance(B,str):A[D]=B.replace('"','').replace("'",'')
		C.writer.writerow(A)
	def writeRows(A,rows):
		for B in rows:A.writeRow(B)
	def download(A,name='export.csv'):B=Blob.new([A.file.getvalue()],**{'type':'application/csv;charset=utf-8;'});web_self.postMessage(type='download',blob=B,filename=name)
class weblog:
	@staticmethod
	def info(text):
		A=text
		if not isinstance(A,str):A=str(A)
		web_self.postMessage(type='info',text=A)
	@staticmethod
	def warn(text):
		A=text
		if not isinstance(A,str):A=str(A)
		web_self.postMessage(type='warn',text=A)
	@staticmethod
	def error(text):
		A=text
		if not isinstance(A,str):A=str(A)
		web_self.postMessage(type='error',text=A)
log=weblog()
class HTTPRequest:
	def __init__(A,method,url,callbackSuccess=_A,callbackFailure=_A,payload=_A,content_type=_A,asynchronous=_C):B=method;super(HTTPRequest,A).__init__();B=B.upper();assert B in[_F,_D];A.method=B;A.callbackSuccess=callbackSuccess;A.callbackFailure=callbackFailure;A.hasBeenSent=_B;A.payload=payload;A.content_type=content_type;A.req=jseval('new XMLHttpRequest()');A.req.onreadystatechange=A.onReadyStateChange;A.req.open(B,url,asynchronous)
	def onReadyStateChange(A,*B,**C):
		if A.req.readyState==1 and not A.hasBeenSent:
			A.hasBeenSent=_C
			if A.method==_D and A.content_type is not _A:A.req.setRequestHeader('Content-Type',A.content_type)
			A.req.send(A.payload)
		if A.req.readyState==4:
			if 200<=A.req.status<300:
				if A.callbackSuccess:A.callbackSuccess(A.req.responseText)
			elif A.callbackFailure:A.callbackFailure(A.req.responseText,A.req.status)
class SimpleNetwork:
	def genReqStr(H,params):
		G='\r\n--';B='---'+''.join([random.choice(string.ascii_lowercase+string.ascii_uppercase+string.digits)for A in range(13)]);D=B;A=f'Content-Type: multipart/mixed; boundary="{D}"\r\nMIME-Version: 1.0\r\n';A+=G+D
		def F(key,value):
			K='.';C=key;A=value;B=''
			if all([B in dir(A)for B in['name','read']]):type='application/octet-stream';H=os.path.basename(A.name).decode(sys.getfilesystemencoding());B+=f'''\r
Content-Type: {type}\r
MIME-Version: 1.0\r
Content-Disposition: form-data; name="{C}"; filename="{H}"\r
\r
''';B+=str(A.read());B+=G+D
			elif isinstance(A,list):
				if any([isinstance(B,dict)for B in A]):
					for (I,E) in enumerate(A):B+=F(C+K+str(I),E)
				else:
					for E in A:B+=F(C,E)
			elif isinstance(A,dict):
				for (J,E) in A.items():B+=F((C+K if C else'')+J,E)
			else:B+=f'''\r
Content-Type: application/octet-stream\r
MIME-Version: 1.0\r
Content-Disposition: form-data; name="{C}"\r
\r
''';B+=str(A)if A is not _A else'';B+=G+D
			return B
		for (C,E) in params.items():A+=F(C,E)
		A+='--\r\n';return A,D
	def __init__(A):A.result=_A;A.status=_A
	def request(A,url,params):
		B=params
		if B:
			C=_D;D=_A
			if isinstance(B,dict):E,F=A.genReqStr(B);D='multipart/form-data; boundary='+F+'; charset=utf-8'
			elif isinstance(B,bytes):D='application/x-www-form-urlencoded';E=B
			else:E=B
			HTTPRequest(C,url,A.onCompletion,A.onError,payload=E,content_type=D,asynchronous=_B)
		else:C=_F;HTTPRequest(C,url,A.onCompletion,A.onError,asynchronous=_B)
		return A
	def onCompletion(A,text):A.result=text;A.status='succeeded'
	def onError(A,text,code):A.status=_E;A.result=text;A.code=code