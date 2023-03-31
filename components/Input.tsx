interface InputProps{
placeholder?: String,
value?: String,
type?: String,
disabled?: boolean
onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const Input:React.FC<InputProps> = ({onChange,disabled,placeholder,type,value}) => {
  return (
    <input 
    disabled={disabled}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}

    className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition"
    />
  )
}

export default Input