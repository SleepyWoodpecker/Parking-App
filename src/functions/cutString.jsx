function cutString(string) {
  if (!string) return;
  //get the first 100 characters
  const displayString =
    string.slice(0, 41) + `${string.length >= 40 ? "..." : ""}`;
  return displayString;
}

export { cutString };
