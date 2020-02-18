import React, { Component } from 'react'

export default class Pagination extends Component {
  

    render() {
        //if there are no results, add text to user that says no results here

        return (
        //pass button handler props and disable function below: 
            <div>
                <button>

                </button>
                <span></span>
                <button> 

                </button>

            </div>
        )
    }
}




//example paging code from my last pokedex app
// export default class Paging extends Component {
//     state = {
//         page: 1
//     }

//     componentDidMount() {
//         this.updateQuery();

//         window.addEventListener('hashchange', () => {
//             this.updateQuery();
//         });
//     }

//     updatePage(increment) {
//         const queryString = window.location.hash.slice(1);
//         const searchParams = new URLSearchParams(queryString);
//         searchParams.set('page', this.state.page + increment);

//         window.location.hash = searchParams.toString();
//     }

//     updateQuery() {
//         const queryString = window.location.hash.slice(1);
//         const searchParams = new URLSearchParams(queryString);
        
//         let pageToUse = this.state.page;
//         const parsedPage = Number(searchParams.get('page'));
//         if (isNaN(parsedPage)) {
//             pageToUse = 1;
//         } else {
//             pageToUse = parsedPage;
//         }

//         this.setState({ page: pageToUse });

//     }

//     render() {
//        const perPage = 20; 
//        const { totalResults } = this.props;
//        const queryString = window.location.hash.slice(1);
//        const searchParams = new URLSearchParams(queryString);

       
//        const parsedPage = Number(searchParams.get('page'));

//         let pageToUse;
//         if (isNaN(parsedPage)) {
//             pageToUse = 1;
//         } else {
//             pageToUse = parsedPage;
//         }

//         if(!totalResults) {
//             return <p>No results match, try again</p>;
//         }

//         const lastPage = Math.ceil(totalResults / perPage);

//         return (
//             <div>
//                 <button
//                     onClick={() => this.updatePage(-1)}
//                     disabled={pageToUse === 1 ? 'true' : ''}>
//                     Previous     
//                 </button>
//                 <span className='searchForm'>Page {pageToUse} of {lastPage}</span>
//                 <button
//                     onClick={() => this.updatePage(1)}
//                     disabled={pageToUse === lastPage ? 'true' : ''}>
//                     Next
//                 </button>
//             </div>    
//         );         
//     }
// }