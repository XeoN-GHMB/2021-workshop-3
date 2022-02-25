import {getCurrentInstance} from 'vue'

export default class Utils {

    static getSlotLength(slot) {
        if (!slot) {
            return 0
        }

        let currentSlot = slot()
        let length = 0
        for (let slotElement of currentSlot) {
            if (slotElement.type.toString() === "Symbol(Fragment)") {
                length += slotElement.children.length;
            } else {
                length += 1
            }
        }
        return length
    }

    static nameToInitials(name) {
        let _name = name.toString()
        return _name.split(" ").map((word) => word[0]).join("").slice(0, 2)
    }

}

