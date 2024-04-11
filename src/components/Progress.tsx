export default function Progress({ value }: { value: number }) {
    return (
        <div className="sticky z-20">
            <div className="bg-gray-300 w-full">
                <span className="block h-2 bg-green-400 text-center text-[10px]/4 rounded-r-full" style={{ width: `${50 * value}%` }}>
                </span>
            </div>
        </div>
    )
}
