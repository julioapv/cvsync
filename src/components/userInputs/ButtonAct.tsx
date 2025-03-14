
const ButtonAct = ({
    onSubmit
}) => {
    return (
        <button
            className="text-xl bg-neutral-800 text-gray-200 p-3 rounded-md cursor-pointer"
            onClick={onSubmit}
        >Submit</button>
    )
} 

export { ButtonAct }