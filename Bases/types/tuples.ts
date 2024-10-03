(() => {
  const hero:[string, number] = ["Dr. Strange", 100]

  hero[0] = "Iron-man"
  hero[1] = 70

  console.log({ hero });
})()