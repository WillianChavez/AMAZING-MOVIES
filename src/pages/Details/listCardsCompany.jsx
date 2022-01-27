import styled from 'styled-components'
import Card from '../../components/Card'
const List = styled.div`
    & {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
    }
`
export default function ListCardsCompany({ companies = [] }) {
    return (
        <List>
            {companies.map((company) => (
                <Card key={company.id} imgPath={company.logo_path} text={`${company.name} - ${company.origin_country}`} />
            ))}
        </List>
    )
}
