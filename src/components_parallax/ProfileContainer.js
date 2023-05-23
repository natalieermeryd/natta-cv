function Profile() {
  return (
    <div data-testid="profile-div" className="profile">
      <h5 className="profileTitle">Profile</h5>
      <ul>
        <li>Address:</li>
        <a
          href="https://goo.gl/maps/xGV9Di3Zy4bdsLXS8"
          target="_blank"
          rel="noreferrer"
        >
          Högstamalmvägen 3,
          <br />
          746 93 BÅLSTA
        </a>
        <li>Phone:</li>
        <a href="tel:+46704309508">+46 70 430 95 08</a>
        <li>Mail:</li>
        <a href="mailto:natalie.ermeryd@outlook.com">
          natalie.ermeryd@outlook.com
        </a>
        <li>Phone:</li>
        <a href="tel:+46704309508">+46 70 430 95 08</a>
        <li>Mail:</li>
        <a href="mailto:natalie.ermeryd@outlook.com">
          natalie.ermeryd@outlook.com
        </a>
      </ul>
    </div>
  );
}

export default Profile;