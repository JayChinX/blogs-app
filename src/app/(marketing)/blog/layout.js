export default function BlogLayout({
    children
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>
            {children}
        </section>
    )
}
