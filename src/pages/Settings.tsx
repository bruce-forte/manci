import { useState } from "react";

export function Settings() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <div className="page-head">
        <h1>General settings</h1>
      </div>

      {saved && (
        <div className="notice notice-success">Settings saved.</div>
      )}

      <div className="card">
        <div className="card-body">
          <table className="form-table">
            <tbody>
              <tr>
                <th>Site title</th>
                <td>
                  <input type="text" defaultValue="mancikak" />
                </td>
              </tr>
              <tr>
                <th>Tagline</th>
                <td>
                  <input type="text" defaultValue="Just another mancikak site" />
                  <div className="form-help">Short description shown in the header.</div>
                </td>
              </tr>
              <tr>
                <th>Site URL</th>
                <td>
                  <input type="url" defaultValue="https://example.com" />
                </td>
              </tr>
              <tr>
                <th>Admin email</th>
                <td>
                  <input type="email" defaultValue="info@hexworks.org" />
                  <div className="form-help">Used for admin notifications.</div>
                </td>
              </tr>
              <tr>
                <th>Membership</th>
                <td>
                  <label className="flex"><input type="checkbox" /> Anyone can register</label>
                </td>
              </tr>
              <tr>
                <th>Default role</th>
                <td>
                  <select defaultValue="Subscriber">
                    <option>Administrator</option>
                    <option>Editor</option>
                    <option>Author</option>
                    <option>Contributor</option>
                    <option>Subscriber</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Timezone</th>
                <td>
                  <select defaultValue="UTC">
                    <option>UTC</option>
                    <option>Europe/Budapest</option>
                    <option>Europe/London</option>
                    <option>America/New_York</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Date format</th>
                <td>
                  <label className="flex"><input type="radio" name="df" defaultChecked /> 2026-06-09</label>
                  <label className="flex"><input type="radio" name="df" /> June 9, 2026</label>
                  <label className="flex"><input type="radio" name="df" /> 09/06/2026</label>
                </td>
              </tr>
              <tr>
                <th>Week starts on</th>
                <td>
                  <select defaultValue="Monday">
                    <option>Sunday</option>
                    <option>Monday</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 16 }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
