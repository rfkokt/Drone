import Link from 'next/link'

export default function Button({children, className, variant, to}) {
    const addClassName = className ? ` ${className}` : ""
    const variants = {
        "outline-blue": `border border-blue-600 text-blue-600`,
        "blue": `bg-blue-600 text-white`
    }
    const pickVariant = variants[variant]
    return (

        <Link href={`${to}`}><a className={`rounded-full py-2 px-6 inline-block ${pickVariant}${addClassName}`}>{children}</a></Link>

    )
}