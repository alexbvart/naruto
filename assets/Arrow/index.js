
function Arrow(props) {
    return (
        <svg
            width={40}
            height={40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={40} height={40} rx={20} fill="currentColor" />
            <path
                d="M27 23.917l-6.5-7a.773.773 0 00-1.123-.016L12.5 23.917"
                stroke="#171516"
                strokeWidth={3}
            />
        </svg>
    )
}

export default Arrow
