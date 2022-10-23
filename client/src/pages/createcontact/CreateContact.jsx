const CreateContact = () => {
    const [contactName, setContactname] = useState('');
    const [contactPic, setArticlePic] = useState(null);
    const [articleText, setArticletext] = useState('')
    const sendData = () => {
        console.log('object');
        const form = new FormData();
        form.append('articletitle', articleTitle)
        form.append('articlepicture', articlePic)
        form.append('articletext', articleText)
        fetch('http://localhost:5000/articles', {
            method:'POST',
            body:form
        })
        .then(res => res.status === 200 ? nav('/'): null)
    }

    return (
        <div>
           <h2>Create Contact</h2>
          <label > Name <input type="text" name="contactname" /></label>
          <label > Number <input type="text" /></label>
          <button>Send Data</button>
        </div>
    );
}

export default CreateContact;