class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes (key-value pairs)
        this.isEndOfWord = false; // Marks if a node is the end of a valid word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
        console.log(`Inserted: ${word}`);
    }

    // Search for a word in the trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Autocomplete suggestions for a given prefix
    autocomplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this._getWordsFromNode(node, prefix);
    }

    // Helper function to get words from a given node and prefix
    _getWordsFromNode(node, prefix) {
        let results = [];
        if (node.isEndOfWord) results.push(prefix);
        for (let char in node.children) {
            results = results.concat(this._getWordsFromNode(node.children[char], prefix + char));
        }
        return results;
    }
}

// Example usage
const trie = new Trie();

// Insert words
trie.insert('apple');
trie.insert('app');
trie.insert('bat');
trie.insert('ball');
trie.insert('batman');

// Search for words
console.log('Search "apple":', trie.search('apple')); // Should return true
console.log('Search "app":', trie.search('app')); // Should return true
console.log('Search "bat":', trie.search('bat')); // Should return true
console.log('Search "ball":', trie.search('ball')); // Should return true
console.log('Search "batman":', trie.search('batman')); // Should return true
console.log('Search "bats":', trie.search('bats')); // Should return false

// Autocomplete suggestions
console.log('\nAutocomplete for "ba":', trie.autocomplete('ba')); // Should return ["bat", "ball", "batman"]
console.log('Autocomplete for "app":', trie.autocomplete('app')); // Should return ["apple", "app"]
console.log('Autocomplete for "b":', trie.autocomplete('b')); // Should return ["bat", "ball", "batman"]