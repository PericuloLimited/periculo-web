async function fetchAPI(query, { variables } = {}) {
// ${process.env.NEXT_PUBLIC_STRAPI_API_URL}
  const res = await fetch(`https://cms.usewarden.com/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
   // console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
//console.log(JSON.stringify(json.errors))
  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}


export async function getAllPagesWithSlug() {
  const data = fetchAPI(`
    {
      pages {
        slug
      }
    }
  `)
//console.log('data')
//console.log(data)
  return data?.allPages
}




export async function getSiteContents(preview,page) {

  const data = await fetchAPI(
    `
    query siteContents ($where: JSON) {
		i18NS(where: $where) {
      content
	}
  }


  `,
    {
      variables: {
        where: {
			name: page
        },
      },
    }
  )

  //return data?.posts
//console.log(data)
	if(data['i18NS'] && data['i18NS'].length) {
		return data['i18NS'][0].content

	} else {
		return null
	}
}




export async function getAllPostsForHome(preview,page) {
  const data = await fetchAPI(
// , limit: 10
    `
    query Posts($where: JSON,$where_site_contents: JSON){
      posts(sort: "date:desc", where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
		category{
          name
        }
        author {
          name
          picture {
            url
          }
        }
      }

    categories {
      name
    }

	i18NS(where: $where_site_contents) {
      content
	}

  }


  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
        where_site_contents: {
			name: page
        },
      },
    }
  )

  //return data?.posts
//console.log(data)
	return data?data:null
}




export async function getAllSlugs(preview) {
  const data = await fetchAPI(
    `
    query Slugs($where: JSON) {
      posts(sort: "date:desc", where: $where) {
        title,
        slug
      }
    }

  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )

	return data?data:null
}


export async function getPost(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      title
	category {
		name
	}
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug: slug,
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )

//console.log('data')
//console.log(data)
  return data
}



export async function getPage(slug, preview) {
  const data = await fetchAPI(
    `
  query PageBySlug($where: JSON) {
    pages(where: $where) {
      title
      content
    }
  
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug: slug
        },
      },
    }
  )

//console.log('data')
//console.log(data)
  return data
}





export async function getMorePosts(slug,category, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {

    morePosts: posts(sort: "date:desc", limit: 3, where: $where) {
      title
      slug
      excerpt
	category {
		name
	}
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
			category: category,
          slug_ne: slug,
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )

//console.log('data')
//console.log(data)
  return data
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 3, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: 'published' }),
        },
        where_ne: {
          ...(preview ? {} : { status: 'published' }),
          slug_ne: slug,
        },
      },
    }
  )

//console.log('data')
//console.log(data)
  return data
}

