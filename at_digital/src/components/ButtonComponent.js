import Button from 'react-bootstrap/Button';
export const ButtonComponent = ({text,color}) => {
    return(
        <Button style={{backgroundColor:"#F28D35",color:"white",border:'0px'}}>{text}</Button>
    )
}