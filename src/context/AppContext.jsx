import { gql, useLazyQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const USER_CATALOG = gql`
  query Catalog ($userId: ID!) {
    userCatalog(userId: $userId) {
      id
      title
      image
      description
      likes
    }
  }
`

const CATALOG = gql`
  query {
    generalCatalog {
      id
      title
      image
      description
      likes
    }
  }
`

export function AppContextProvider(props) {
  const [catalog, setCatalog] = useState([]);
  const [generalCatalog, setGeneralCatalog] = useState([]);
  const [userCatalogQuery, { loading, error, data }] = useLazyQuery(USER_CATALOG/* , {
    onCompleted: (data) => {
      console.log(data);
      setCatalog(data.userCatalog)
    },
    onError: (error) => console.log(error)
  } */)

  const [catalogQuery] = useLazyQuery(CATALOG)

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    catalogQuery({
      onCompleted: (data) => {
        console.log(data);
        setGeneralCatalog(data.generalCatalog)
        console.log(generalCatalog);
      }
    })
    if (userId) {
      userCatalogQuery({
        variables: { userId },
        onCompleted: (data) => {
          console.log(data);
          setCatalog(data.userCatalog)
          console.log(catalog);
        },
        onError: (error) => console.log(error)
      })
      //setCatalog(data.userCatalog)
    }
  }, [])

  function addMovie(movie) {
    setCatalog([...catalog, movie])
    setGeneralCatalog([...generalCatalog, {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      image: movie.image,
      likes: movie.likes
    }])
  }

  function allUserMovies(id) {
    userCatalogQuery({
      variables: { userId: id, },
      onCompleted: (data) => {
        console.log(data);
        setCatalog(data.userCatalog)
      },
      onError: (error) => console.log(error)
    })
  }

  function allMovies() {
    catalogQuery({
      onCompleted: (data) => {
        console.log(data);
        setGeneralCatalog(data.generalCatalog)
      }
    })
  }

  return (
    <AppContext.Provider value={
      {
        catalog,
        generalCatalog,
        addMovie,
        allUserMovies,
        allMovies,
      }
    } >
      {props.children}
    </AppContext.Provider>
  )
}