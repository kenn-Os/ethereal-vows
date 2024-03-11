const GuestListPage = () => {
  const guests = [
    { id: 1, name: 'John Doe', status: 'RSVP Confirmed' },
    { id: 2, name: 'Jane Smith', status: 'RSVP Pending' },
    { id: 3, name: 'Michael Johnson', status: 'RSVP Declined' },
    { id: 4, name: 'Emily White', status: 'RSVP Confirmed' },
    { id: 5, name: 'William Brown', status: 'RSVP Pending' },
  ];

  return (
    <div className="mx-5 mt-4 py-4">
      <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.id}</td>
              <td>{guest.name}</td>
              <td>{guest.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestListPage;
