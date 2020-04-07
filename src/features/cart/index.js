export const cartItemsWithQuantities = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
    filteredItem !== undefined
      ? filteredItem.quantity++
      : acc.push({...item, quantity: 1})
    return acc
  }, [])
};

// so basically you can add the same item with the same id twice if its not there then it adds it to the acc with push
// cart [
//   {
//     id: 1
//   },
//   {
//     id: 1
//   },
//   {
//     id: 2
//   },
// ]
//
// acc or accumulator = []
//
// acc.push({...item, quantity: 1})

// after adding the accumulator will look like this
// acc or accumulator = [
// {
//   id: 1,
      // quantity: 1
// }]
