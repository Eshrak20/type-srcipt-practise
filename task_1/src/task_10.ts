{
  //Objective: Handle null and undefined values using nullish coalescing.
  const getDisplayName = (name: string | null | undefined): string => { 
    const result = name ?? "Anonymous";
    return result
  }

  console.log(getDisplayName())
}
