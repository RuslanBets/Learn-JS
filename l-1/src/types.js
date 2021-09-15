const getTypes = function () {
  /*type number
  Integer 1,2,3
  Float or Double 1.6, 0.5
  */
  let num = 1
  let floatNum = 1.0

  /*type string
  * '' or ""
  * */
  let str = 'some string'

  /*type array
  * []
  * */
  let myArr = [1, 2, 3, '1', [1,2,3], { user: 'some name' }, true]

  /*type boolean
 * true or false
 * */
  let bool = true;

  /*type object
  *
  * */
  let customer = {
      firstName: 'Roma',
      email: 'roma@ukr.net'
    }

  // console.log(customer.email)
}

export default { getTypes }