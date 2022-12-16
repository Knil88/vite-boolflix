import{reactive} from 'vue'
export const store = reactive(
    { ContentList:[],
        apiUrl:"https://api.themoviedb.org/3/movie/popular?api_key=7734b0e09678f96e2a88fcbf9223878a&language=it&page=1 ",
        apiOriginal:"original_title",
        apiTitle:"title",
        
        searchText:"",
    });