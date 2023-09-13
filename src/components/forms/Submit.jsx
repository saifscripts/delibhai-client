/* eslint-disable react/prop-types */

function Submit({value, className}) {
  return (
    <button className={`bg-primary text-white text-xl rounded-full w-full py-3 mt-8 ${className}`} type='submit'>{value}</button>
  )
}

export default Submit