export default function Card({ children }) {
    return (
        <div className="bg-white overflow-hidden border border-gray-200 rounded-lg max-w-prose">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    )
}