<?php include 'templates/header.php'; ?>

<a href="index.php" class="btn btn-secondary mb-3">&larr; Back</a>

<h2>Add New Joke</h2>
<form id="addJokeForm">
  <div class="mb-3">
    <label for="content" class="form-label">Joke Content</label>
    <textarea class="form-control" id="content" required></textarea>
  </div>
  <div class="mb-3">
    <label for="author" class="form-label">Author</label>
    <input type="text" class="form-control" id="author" required>
  </div>
  <button type="submit" class="btn btn-primary">Add Joke</button>
</form>

<script>
  document.getElementById('addJokeForm').addEventListener('submit', e => {
    event.preventDefault();
    const content = e.target.content.value;
    const author = e.target.author.value;
    addJoke(content, author);
  });

  function addJoke(content, author) {
    const joke = {
      content: content,
      author: author
    };
    fetch('api/jokes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(joke)
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('Joke added successfully!');
          window.location.href = 'index.php';
        } else {
          alert('Error adding joke');
        }
      });
  }
</script>

<?php include 'templates/footer.php'; ?>