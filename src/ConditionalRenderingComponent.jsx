
export const ConditionalRenderingComponent = ({ isBlue }) => {
        return <span>I am {isBlue? "blue" : "red"}</span>;
};