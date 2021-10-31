export default function Layout({ children }) {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex">
            <div className="mx-w-3xl mx-auto m-24">
                {children}
            </div>
        </div>)
}