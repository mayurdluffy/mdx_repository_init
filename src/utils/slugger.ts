const slugger = (title: String) => {
    return title.split(' ').join('-').toLowerCase();
}

export default slugger