let teamContainer = document.querySelector('.team-container')
const inOurTeam = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < inOurTeam.length; i++) {
    let card = document.createElement('div')
    card.classList.add('team-card');
    let personName = inOurTeam[i]['nome']
    let personRole = inOurTeam[i]['ruolo']
    let personPhoto = inOurTeam[i]['foto']
    card.innerHTML = `
        <div class="card-image">
            <img src="img/${personPhoto}"/>
        </div>
        <div class="card-text">
            <h3>${personName}</h3>
            <p>${personRole}</p>
        </div>`

    teamContainer.appendChild(card);
}
    