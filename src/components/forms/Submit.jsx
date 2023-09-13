/* eslint-disable react/prop-types */

function Submit({value, className, ...props}) {
  return (
    <button className={`bg-primary text-white text-xl rounded-full w-full py-3 my-8 ${className}`} type='submit' {...props}>{value}</button>
  )
}

export default Submit