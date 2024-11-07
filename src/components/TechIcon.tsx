
export const TechIcon = ({ component }: { component: React.ElementType}) => {
    const Component = component;
    return <>
        <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
        <svg className="size-0 absolute">
            <linearGradient id="tech-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef32d9" />
                <stop offset="100%" stopColor="#89fffd" />
            </linearGradient>
        </svg>
    </>
}

export default TechIcon