import {Container} from './styles'

export function Tag({title, isOffers }) {
    return (
        <Container isOffers={isOffers}>
            {title}
        </Container>
    )
}
