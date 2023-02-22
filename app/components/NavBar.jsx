import Link from "next/link";

export function NavBar() {
    return (
        <>
            <p>Mon site :</p>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </>

    )
}