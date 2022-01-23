import styled from 'styled-components'

const IconItem = styled.i`
    & {
        color: ${(props) => (props.color === '' ? 'inherit' : props.color)};
        font-size: ${(props) => props.size};
        display: inline-block;
    }
`

export default function Icon({ name = 'ph-heart', color = '', size = '1.5em' }) {
    return (
        <IconItem color={color} size={size}>
            <i className={name}></i>
        </IconItem>
    )
}
