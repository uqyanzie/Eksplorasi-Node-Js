const square = (x) => {
    return x * x
}
console.log(square(2))

const squareAlt = (x) => x * x
console.log(squareAlt(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike', 'Uqyanzie'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList();