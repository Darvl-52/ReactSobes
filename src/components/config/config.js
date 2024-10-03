export const userInput = (user) => {
    if (!user) return null;
    return [
        {
            id: 1,
            title: 'Имя',
            placeholder: 'Имя',
            value: user.name,
            type: 'text',
            register: 'name'
        },
        {
            id: 2,
            title: 'Никнейм',
            placeholder: 'Никнейм',
            value: user.username,
            type: 'text',
            register: 'nickname'
        },
        {
            id: 3,
            title: 'Почта',
            placeholder: 'Почта',
            value: user.email,
            type: 'email',
            register: 'email'
        },
        {
            id: 4,
            title: 'Город',
            placeholder: 'Город',
            value: user.address.city,
            type: 'text',
            register: 'city'
        },
        {
            id: 5,
            title: 'Телефон',
            placeholder: 'Телефон',
            value: user.phone,
            type: 'tel',
            register: 'phone'
        },
        {
            id: 6,
            title: 'Название компании',
            placeholder: 'Название компании',
            value: user.company.name,
            type: 'text',
            register: 'nameCompany'
        },
    ]
}