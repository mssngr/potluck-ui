import Table from './table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'title', label: 'Title' },
  { key: 'species', label: 'Species' },
  { key: 'birthplace', label: 'Birthplace' },
]

const data = [
  {
    name: 'Luke Skywalker',
    title: 'Jedi Master',
    species: 'Human',
    birthplace: 'Tatooine',
  },
  {
    name: 'Leia Organa',
    title: 'General',
    species: 'Human',
    birthplace: 'Alderaan',
  },
  {
    name: 'Han Solo',
    title: 'Smuggler',
    species: 'Human',
    birthplace: 'Corellia',
  },
  {
    name: 'Chewbacca',
    title: 'Smuggler',
    species: 'Wookiee',
    birthplace: 'Kashyyyk',
  },
  {
    name: 'Darth Vader',
    title: 'Sith Lord',
    species: 'Human',
    birthplace: 'Tatooine',
  },
  {
    name: 'Yoda',
    title: 'Jedi Master',
    species: 'Unknown',
    birthplace: 'Unknown',
  },
  {
    name: 'Obi-Wan Kenobi',
    title: 'Jedi Master',
    species: 'Human',
    birthplace: 'Stewjon',
  },
  {
    name: 'Boba Fett',
    title: 'Bounty Hunter',
    species: 'Human',
    birthplace: 'Kamino',
  },
  {
    name: 'Lando Calrissian',
    title: 'Administrator',
    species: 'Human',
    birthplace: 'Socorro',
  },
  {
    name: 'Padmé Amidala',
    title: 'Senator',
    species: 'Human',
    birthplace: 'Naboo',
  },
  {
    name: 'Mace Windu',
    title: 'Jedi Master',
    species: 'Human',
    birthplace: 'Haruun Kal',
  },
  {
    name: 'Qui-Gon Jinn',
    title: 'Jedi Master',
    species: 'Human',
    birthplace: 'Coruscant',
  },
  {
    name: 'Count Dooku',
    title: 'Sith Lord',
    species: 'Human',
    birthplace: 'Serenno',
  },
  {
    name: 'Poe Dameron',
    title: 'Pilot',
    species: 'Human',
    birthplace: 'Yavin 4',
  },
  {
    name: 'Finn',
    title: 'Stormtrooper',
    species: 'Human',
    birthplace: 'Unknown',
  },
  { name: 'Rey', title: 'Jedi', species: 'Human', birthplace: 'Jakku' },
  {
    name: 'Kylo Ren',
    title: 'Sith',
    species: 'Human',
    birthplace: 'Unknown',
  },
  {
    name: 'Jabba the Hutt',
    title: 'Gangster',
    species: 'Hutt',
    birthplace: 'Nal Hutta',
  },
  {
    name: 'Wedge Antilles',
    title: 'Pilot',
    species: 'Human',
    birthplace: 'Corellia',
  },
  {
    name: 'Admiral Ackbar',
    title: 'Admiral',
    species: 'Mon Calamari',
    birthplace: 'Mon Cala',
  },
  {
    name: 'Ahsoka Tano',
    title: 'Jedi',
    species: 'Togruta',
    birthplace: 'Shili',
  },
  {
    name: 'Asajj Ventress',
    title: 'Sith',
    species: 'Dathomirian',
    birthplace: 'Dathomir',
  },
  {
    name: 'Bail Organa',
    title: 'Senator',
    species: 'Human',
    birthplace: 'Alderaan',
  },
  {
    name: 'BB-8',
    title: 'Droid',
    species: 'Astromech',
    birthplace: 'Unknown',
  },
  {
    name: 'C-3PO',
    title: 'Droid',
    species: 'Protocol',
    birthplace: 'Tatooine',
  },
  {
    name: 'R2-D2',
    title: 'Droid',
    species: 'Astromech',
    birthplace: 'Naboo',
  },
  {
    name: 'Darth Maul',
    title: 'Sith',
    species: 'Zabrak',
    birthplace: 'Dathomir',
  },
  {
    name: 'Emperor Palpatine',
    title: 'Emperor',
    species: 'Human',
    birthplace: 'Naboo',
  },
  {
    name: 'Greedo',
    title: 'Bounty Hunter',
    species: 'Rodian',
    birthplace: 'Rodia',
  },
  {
    name: 'Jango Fett',
    title: 'Bounty Hunter',
    species: 'Human',
    birthplace: 'Concord Dawn',
  },
  {
    name: 'Kit Fisto',
    title: 'Jedi',
    species: 'Nautolan',
    birthplace: 'Glee Anselm',
  },
]

export const Default = () => <Table columns={columns} data={data} />
export const Sticky = () => <Table columns={columns} data={data} sticky />
