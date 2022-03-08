

// Renders the content of a koala card (their name and description)
export let renderKoalaCardContent = koala => {
    let koalaContent = document.createElement('div')
    koalaContent.setAttribute('class', 'content')

    let header = document.createElement('div')
    header.setAttribute('class', 'header')
    header.append(koala.name)

    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.append(koala.description)

    let descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    return koalaContent
}