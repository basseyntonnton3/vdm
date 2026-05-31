const stateNames = [
  "Abia","Adamawa","Anambra","Akwa Ibom","Bauchi","Bayelsa","Benue",
  "Borno","Cross River","Delta","Ebonyi","Enugu","Edo","Ekiti","FCT",
  "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara",
  "Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers",
  "Sokoto","Taraba","Yobe","Zamfara"
];

const leaderRoles = [
  "State Coordinator",
  "Community Liaison",
  "Operations Lead"
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-');
}

function createLeaderCard(stateSlug, stateIndex, leaderIndex) {
  const card = document.createElement('article');
  card.className = 'leader-card';

  const photo = document.createElement('div');
  photo.className = 'leader-photo';
  const image = document.createElement('img');
  image.src = `https://i.pravatar.cc/320?u=${encodeURIComponent(`${stateSlug}-${leaderIndex}`)}`;
  image.alt = `Portrait of ${stateSlug} leader ${leaderIndex}`;
  photo.appendChild(image);

  const name = document.createElement('h3');
  name.textContent = `${stateNames[stateIndex]} Leader ${leaderIndex}`;

  const role = document.createElement('p');
  role.className = 'leader-role';
  role.textContent = leaderRoles[leaderIndex - 1];

  const email = document.createElement('p');
  email.className = 'leader-contact';
  email.innerHTML = `Email: <a href="mailto:leader${leaderIndex}@${stateSlug}.mvoi4all.com">leader${leaderIndex}@${stateSlug}.mvoi4all.com</a>`;

  const phone = document.createElement('p');
  phone.className = 'leader-contact';
  const contactNumber = `+234 701 ${String(100 + stateIndex * 3 + leaderIndex).padStart(3, '0')}`;
  phone.textContent = `Phone: ${contactNumber}`;

  card.append(photo, name, role, email, phone);
  return card;
}

function renderStateLeaders() {
  const container = document.getElementById('stateLeadersGrid');
  if (!container) return;

  stateNames.forEach((state, stateIndex) => {
    const stateSlug = slugify(state);
    const details = document.createElement('details');
    details.className = 'state-card reveal';

    const summary = document.createElement('summary');
    summary.textContent = `${state} — 3 Local Leaders`;
    details.appendChild(summary);

    const leadersGrid = document.createElement('div');
    leadersGrid.className = 'leaders-grid';

    for (let i = 1; i <= 3; i += 1) {
      leadersGrid.appendChild(createLeaderCard(stateSlug, stateIndex, i));
    }

    details.appendChild(leadersGrid);
    container.appendChild(details);
  });
}

window.addEventListener('DOMContentLoaded', renderStateLeaders);
