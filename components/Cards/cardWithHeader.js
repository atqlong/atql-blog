export default function CardWithHeader({ children }) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}