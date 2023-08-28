export default function StoryTray({ stories }) {
  // copy the array
  let storiesToDisplay = stories.slice();
  // does not affect the original array:
  storiesToDisplay.push({
    id: "create",
    label: "Create Story"
  });

  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
