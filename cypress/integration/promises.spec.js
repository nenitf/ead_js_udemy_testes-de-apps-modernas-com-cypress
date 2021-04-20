it('nada agora', () => {
  /* callback
  const wsProvider = callback => {
    setTimeout(_ => {
      callback({ ok: true })
    }, 11)
  }

  const system = _ => {
    console.log("init")
    wsProvider(some => console.log(some))
    console.log("end")
  }
  */


  /* async await
  const wsProvider = _ => {
    setTimeout(_ => {
      return { ok: true }
    }, 11)
  }

  const system = async _ => {
    console.log("init")
    some = await wsProvider()
    console.log(some)
    console.log("end sincrono")
  }
  */

  // recomendação do cypress é utilizar promises
  const wsProvider = _ => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve({ ok: true })
      }, 11)
    })
  }

  const system = _ => {
    console.log("init")
    wsProvider().then(some => {
      console.log(some)
      console.log("end sincrono")
    })
    console.log("end")
  }

  system()
})
