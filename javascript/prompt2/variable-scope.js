let CHANGE_ME = "+-------------+"

function main() {
  console.log(foo)

  if (true) {
    let CHANGE_ME = "  ----  "
    console.log(foo)
    console.log(bar)
    if (true) {
      let CHANGE_ME = "    ++    "
      console.log(bar)
      console.log(foo)
      console.log(buzz)
    }
    
    console.log(bar)
    console.log(foo)
  }

  console.log(foo)
}

main()
