const getBooksService = {
    getNewBooks : async ( stateHandler )=>{
        const data = await fetch('https://api.itbook.store/1.0/new');
        const { books } = await data.json();
        stateHandler(books);
      },

    getSearchedBooks : async ( stateHandler, search )=>{
        const data = await fetch(`https://api.itbook.store/1.0/search/${search}`);
        const { books } = await data.json();
        stateHandler(books);
    },

    getDetailInfo: async (stateHandler, id)=>{
        const data = await fetch(`https://api.itbook.store/1.0/books/${id}`);
        const book = await data.json();
        stateHandler(book);
    }
}

export default getBooksService;