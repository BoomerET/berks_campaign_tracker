// Simple inline styles for basic layout and styling
export const Styles = {
  container: {
    margin: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    marginBottom: '1.5rem',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    maxWidth: '500px',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    fontSize: '1rem',
    minHeight: '80px',
  },
  button: {
    padding: '0.5rem 1rem',
    marginTop: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    marginTop: '2rem',
  },
  campaignList: {
    flex: 1,
    padding: '1rem',
    borderRight: '1px solid #ccc',
  },
  campaignDetail: {
    flex: 2,
    padding: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  campaignName: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginLeft: '1rem',
    padding: '0.2rem 0.5rem',
    cursor: 'pointer',
    color: 'yellow',
  },
};