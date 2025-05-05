function Select({ label, options, value, onChange, ...props }) {

    return ( 
        <label className='flex flex-col gap-0.5'>
            {label} :
            <select
                {...props}
                className='border-2 border-neutral-200 rounded-md py-1 px-1 focus:border-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-400 outline-0 transition-all duration-200'
                value={value}
                onChange={onChange}
            >
                {
                options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))
                }
            </select>
        </label>
    );
}

export default Select;