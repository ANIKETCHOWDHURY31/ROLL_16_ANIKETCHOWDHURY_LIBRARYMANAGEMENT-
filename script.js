// ==========================================
// KAMAL NAYANAM - THE ENCHANTED LIBRARY
// Library Management System
// ==========================================

const starterBooks = [
  { id: "KN001", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, category: "Romance", copies: 4 },
  { id: "KN002", title: "The Notebook", author: "Nicholas Sparks", year: 1996, category: "Romance", copies: 3 },
  { id: "KN003", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, category: "Romance", copies: 2 },
  { id: "KN004", title: "Me Before You", author: "Jojo Moyes", year: 2012, category: "Romance", copies: 3 },
  { id: "KN005", title: "The Fault in Our Stars", author: "John Green", year: 2012, category: "Romance", copies: 2 },

  { id: "KN006", title: "The Alchemist", author: "Paulo Coelho", year: 1988, category: "Fiction", copies: 5 },
  { id: "KN007", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, category: "Fiction", copies: 3 },
  { id: "KN008", title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, category: "Fiction", copies: 4 },
  { id: "KN009", title: "The Kite Runner", author: "Khaled Hosseini", year: 2003, category: "Fiction", copies: 2 },
  { id: "KN010", title: "Little Women", author: "Louisa May Alcott", year: 1868, category: "Fiction", copies: 3 },

  { id: "KN011", title: "Sherlock Holmes", author: "Arthur Conan Doyle", year: 1887, category: "Mystery", copies: 4 },
  { id: "KN012", title: "Murder on the Orient Express", author: "Agatha Christie", year: 1934, category: "Mystery", copies: 3 },
  { id: "KN013", title: "The Silent Patient", author: "Alex Michaelides", year: 2019, category: "Mystery", copies: 2 },
  { id: "KN014", title: "Gone Girl", author: "Gillian Flynn", year: 2012, category: "Mystery", copies: 3 },
  { id: "KN015", title: "And Then There Were None", author: "Agatha Christie", year: 1939, category: "Mystery", copies: 2 },

  { id: "KN016", title: "Harry Potter", author: "J. K. Rowling", year: 1997, category: "Fantasy", copies: 5 },
  { id: "KN017", title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937, category: "Fantasy", copies: 3 },
  { id: "KN018", title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954, category: "Fantasy", copies: 2 },
  { id: "KN019", title: "Alice in Wonderland", author: "Lewis Carroll", year: 1865, category: "Fantasy", copies: 4 },
  { id: "KN020", title: "Percy Jackson", author: "Rick Riordan", year: 2005, category: "Fantasy", copies: 3 },

  { id: "KN021", title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, category: "Science", copies: 3 },
  { id: "KN022", title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, category: "Science", copies: 2 },
  { id: "KN023", title: "Cosmos", author: "Carl Sagan", year: 1980, category: "Science", copies: 3 },
  { id: "KN024", title: "The Origin of Species", author: "Charles Darwin", year: 1859, category: "Science", copies: 2 },
  { id: "KN025", title: "The Gene", author: "Siddhartha Mukherjee", year: 2016, category: "Science", copies: 2 },

  { id: "KN026", title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, category: "History", copies: 3 },
  { id: "KN027", title: "India After Gandhi", author: "Ramachandra Guha", year: 2007, category: "History", copies: 2 },
  { id: "KN028", title: "The Discovery of India", author: "Jawaharlal Nehru", year: 1946, category: "History", copies: 3 },
  { id: "KN029", title: "Guns, Germs, and Steel", author: "Jared Diamond", year: 1997, category: "History", copies: 2 },
  { id: "KN030", title: "The Wright Brothers", author: "David McCullough", year: 2015, category: "History", copies: 2 },

  { id: "KN031", title: "The Sun and Her Flowers", author: "Rupi Kaur", year: 2017, category: "Poetry", copies: 3 },
  { id: "KN032", title: "Milk and Honey", author: "Rupi Kaur", year: 2014, category: "Poetry", copies: 3 },
  { id: "KN033", title: "The Prophet", author: "Kahlil Gibran", year: 1923, category: "Poetry", copies: 2 },
  { id: "KN034", title: "Leaves of Grass", author: "Walt Whitman", year: 1855, category: "Poetry", copies: 2 },
  { id: "KN035", title: "Gitanjali", author: "Rabindranath Tagore", year: 1910, category: "Poetry", copies: 4 },

  { id: "KN036", title: "Wings of Fire", author: "A. P. J. Abdul Kalam", year: 1999, category: "Fiction", copies: 3 },
  { id: "KN037", title: "The White Tiger", author: "Aravind Adiga", year: 2008, category: "Fiction", copies: 2 },
  { id: "KN038", title: "Malgudi Days", author: "R. K. Narayan", year: 1943, category: "Fiction", copies: 3 },
  { id: "KN039", title: "The Immortals of Meluha", author: "Amish Tripathi", year: 2010, category: "Fantasy", copies: 3 },
  { id: "KN040", title: "Devdas", author: "Sarat Chandra Chattopadhyay", year: 1917, category: "Romance", copies: 2 }
];

// ==========================================
// DATA STORAGE
// ==========================================

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.error("Could not load saved data:", error);
    return fallback;
  }
}

let books = loadData("knBooks", starterBooks);
let issues = loadData("knIssues", []);

function saveData() {
  try {
    localStorage.setItem("knBooks", JSON.stringify(books));
    localStorage.setItem("knIssues", JSON.stringify(issues));
  } catch (error) {
    showToast("Unable to save data in this browser.");
    console.error(error);
  }
}

// ==========================================
// ELEMENTS
// ==========================================

const bookTableBody = document.getElementById("bookTableBody");
const recordsTableBody = document.getElementById("recordsTableBody");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortBooks = document.getElementById("sortBooks");

const addBookForm = document.getElementById("addBookForm");
const issueForm = document.getElementById("issueForm");

const issueDialog = document.getElementById("issueDialog");
const toast = document.getElementById("toast");

// ==========================================
// NOTIFICATION
// ==========================================

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// ==========================================
// STATISTICS
// ==========================================

function updateStatistics() {
  const totalCopies = books.reduce(
    (sum, book) => sum + Number(book.copies),
    0
  );

  const issuedCount = issues.filter(
    issue => issue.status === "Issued"
  ).length;

  // Available copies must exclude books that are currently issued.
  const availableCount = Math.max(totalCopies - issuedCount, 0);

  document.getElementById("totalBooks").textContent = totalCopies;

  document.getElementById("availableBooks").textContent =
    availableCount;

  document.getElementById("issuedBooks").textContent =
    issuedCount;
}

// ==========================================
// DISPLAY BOOKS
// ==========================================

function displayBooks() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const sortValue = sortBooks.value;

  let filteredBooks = books.filter(book => {
    const matchesSearch =
      book.id.toLowerCase().includes(searchTerm) ||
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortValue === "title") {
    filteredBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortValue === "year") {
    filteredBooks.sort((a, b) => b.year - a.year);
  }

  if (sortValue === "available") {
    filteredBooks.sort((a, b) => b.copies - a.copies);
  }

  bookTableBody.innerHTML = "";

  document.getElementById("emptyState").hidden =
    filteredBooks.length !== 0;

  filteredBooks.forEach(book => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.className = "book-id";
    idCell.textContent = book.id;

    const titleCell = document.createElement("td");
    titleCell.className = "book-title";
    titleCell.textContent = book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;

    const yearCell = document.createElement("td");
    yearCell.textContent = book.year;

    const availableCell = document.createElement("td");

    const availability = document.createElement("span");
    availability.className = book.copies > 0
      ? "availability"
      : "availability unavailable";

    availability.textContent = book.copies > 0
      ? `${book.copies} copies`
      : "Unavailable";

    availableCell.appendChild(availability);

    const actionCell = document.createElement("td");

    const issueButton = document.createElement("button");
    issueButton.className = "small-btn";
    issueButton.textContent = "Issue book";
    issueButton.disabled = book.copies <= 0;

    issueButton.addEventListener("click", () => {
      openIssueDialog(book.id);
    });

    actionCell.appendChild(issueButton);

    row.append(
      idCell,
      titleCell,
      authorCell,
      yearCell,
      availableCell,
      actionCell
    );

    bookTableBody.appendChild(row);
  });
}

// ==========================================
// SEARCH AND FILTER
// ==========================================

searchInput.addEventListener("input", displayBooks);
categoryFilter.addEventListener("change", displayBooks);
sortBooks.addEventListener("change", displayBooks);

// ==========================================
// COLLECTION CATEGORY BUTTONS
// ==========================================

document.querySelectorAll(".collection-card").forEach(card => {
  card.addEventListener("click", () => {
    categoryFilter.value = card.dataset.category;
    displayBooks();

    document.getElementById("library").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ==========================================
// ADD A NEW BOOK
// ==========================================

addBookForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("bookId")
    .value.trim().toUpperCase();

  const title = document.getElementById("bookTitle")
    .value.trim();

  const author = document.getElementById("bookAuthor")
    .value.trim();

  const year = Number(document.getElementById("bookYear").value);

  const copies = Number(document.getElementById("bookCopies").value);

  const category = document.getElementById("bookCategory").value;

  const message = document.getElementById("formMessage");

  message.style.color = "#b35b76";

  // Validate ID
  if (!id || !title || !author || !category) {
    message.textContent = "Please complete all the required fields.";
    return;
  }

  // Reject duplicate ID
  const duplicate = books.some(book => book.id === id);

  if (duplicate) {
    message.textContent = "This Book ID already exists. Use another ID.";
    return;
  }

  // Validate year
  const currentYear = new Date().getFullYear();

  if (!Number.isInteger(year) || year < 1 || year > currentYear) {
    message.textContent = "Please enter a valid publication year.";
    return;
  }

  // Validate copies
  if (!Number.isInteger(copies) || copies < 0) {
    message.textContent = "Copies must be a whole number (0 or more).";
    return;
  }

  const newBook = {
    id,
    title,
    author,
    year,
    category,
    copies
  };

  books.push(newBook);

  saveData();
  displayBooks();
  updateStatistics();

  addBookForm.reset();

  message.style.color = "#57845d";
  message.textContent = "Your book has been added successfully!";

  showToast("✿ New book added to the collection!");

  setTimeout(() => {
    message.textContent = "";
  }, 4000);
});

// ==========================================
// OPEN ISSUE WINDOW
// ==========================================

function openIssueDialog(bookId) {
  const book = books.find(item => item.id === bookId);

  if (!book) {
    showToast("Book not found.");
    return;
  }

  if (book.copies <= 0) {
    showToast("Sorry, no copies are currently available.");
    return;
  }

  document.getElementById("issueBookId").value = book.id;

  document.getElementById("selectedBookDetails").textContent =
    `${book.title} by ${book.author} · ${book.copies} copies available`;

  document.getElementById("studentId").value = "";
  document.getElementById("issueMessage").textContent = "";

  issueDialog.showModal();
}

// ==========================================
// ISSUE BOOK
// ==========================================

issueForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const bookId = document.getElementById("issueBookId").value;

  const studentId = document.getElementById("studentId")
    .value.trim().toUpperCase();

  const message = document.getElementById("issueMessage");

  const book = books.find(item => item.id === bookId);

  if (!studentId) {
    message.textContent = "Please enter a valid Student ID.";
    return;
  }

  if (!book) {
    message.textContent = "Book not found.";
    return;
  }

  if (book.copies <= 0) {
    message.textContent = "No copies are available.";
    return;
  }

  // Check if this student already has this book issued
  const alreadyIssued = issues.some(issue =>
    issue.bookId === bookId &&
    issue.studentId === studentId &&
    issue.status === "Issued"
  );

  if (alreadyIssued) {
    message.textContent =
      "This student already has this book issued.";
    return;
  }

  // Decrease available copies
  book.copies--;

  // Create transaction record
  const transaction = {
    transactionId: Date.now().toString() + Math.random().toString(16).slice(2),
    bookId: book.id,
    bookTitle: book.title,
    studentId: studentId,
    issuedOn: new Date().toLocaleDateString("en-IN"),
    status: "Issued"
  };

  issues.push(transaction);

  saveData();
  displayBooks();
  displayRecords();
  updateStatistics();

  issueDialog.close();

  showToast("✿ Book issued successfully!");
});

// ==========================================
// DISPLAY ISSUE RECORDS
// ==========================================

function displayRecords() {
  recordsTableBody.innerHTML = "";

  const emptyMessage = document.getElementById("recordsEmpty");

  emptyMessage.hidden = issues.length !== 0;

  // Show newest records first
  const sortedIssues = [...issues].reverse();

  sortedIssues.forEach(issue => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.className = "book-id";
    idCell.textContent = issue.bookId;

    const titleCell = document.createElement("td");
    titleCell.className = "book-title";
    titleCell.textContent = issue.bookTitle;

    const studentCell = document.createElement("td");
    studentCell.textContent = issue.studentId;

    const dateCell = document.createElement("td");
    dateCell.textContent = issue.issuedOn;

    const statusCell = document.createElement("td");

    const status = document.createElement("span");

    status.className = issue.status === "Issued"
      ? "status-pill"
      : "status-pill returned-pill";

    status.textContent = issue.status;

    statusCell.appendChild(status);

    const actionCell = document.createElement("td");

    if (issue.status === "Issued") {
      const returnButton = document.createElement("button");

      returnButton.className = "small-btn";
      returnButton.textContent = "Return book";

      returnButton.addEventListener("click", () => {
        returnBook(issue.transactionId);
      });

      actionCell.appendChild(returnButton);
    } else {
      actionCell.textContent = "Completed";
    }

    row.append(
      idCell,
      titleCell,
      studentCell,
      dateCell,
      statusCell,
      actionCell
    );

    recordsTableBody.appendChild(row);
  });
}

// ==========================================
// RETURN BOOK
// ==========================================

function returnBook(transactionId) {
  const issue = issues.find(item =>
    item.transactionId === transactionId
  );

  if (!issue || issue.status !== "Issued") {
    showToast("No outstanding issue found for this transaction.");
    return;
  }

  const book = books.find(item => item.id === issue.bookId);

  if (!book) {
    showToast("Book record could not be found.");
    return;
  }

  // Mark transaction as returned
  issue.status = "Returned";

  // Increase available copies
  book.copies++;

  saveData();
  displayBooks();
  displayRecords();
  updateStatistics();

  showToast("✿ Book returned successfully!");
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// ==========================================
// INITIALIZE WEBSITE
// ==========================================

function initializeLibrary() {
  displayBooks();
  displayRecords();
  updateStatistics();
}

initializeLibrary();

// Hide the intro after the page has loaded so it cannot cover the library.
const magicLoader = document.getElementById("magicLoader");

function hideMagicLoader() {
  if (magicLoader) magicLoader.classList.add("hide");
}

window.addEventListener("load", () => {
  window.setTimeout(hideMagicLoader, 1600);
});

// Fallback for slow or blocked external font/image requests.
window.setTimeout(hideMagicLoader, 5000);
function returnBook(transactionId) {
  const issue = issues.find(item =>
    item.transactionId === transactionId
  );

  if (!issue || issue.status !== "Issued") {
    showToast("No outstanding issue found.");
    return;
  }

  const book = books.find(item => item.id === issue.bookId);

  if (!book) {
    showToast("Book record could not be found.");
    return;
  }

  issue.status = "Returned";
  issue.returnedOn = new Date().toLocaleDateString("en-IN");

  book.copies++;

  saveData();
  displayBooks();
  displayRecords();
  updateStatistics();

  showToast("✿ Book returned successfully!");
}
