import React from 'react'

const EventsTable = ({ events }) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event}>
                <td>{event}</td>
                <td>
                  <button className='btn btn-sm btn-secondary'>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventsTable