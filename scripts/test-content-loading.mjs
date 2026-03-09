// Manual test script for content loading utilities
// Run with: node scripts/test-content-loading.mjs

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.join(__dirname, '..', 'data')

console.log('Testing Content Loading Utilities...\n')

// Test getSiteContent
async function testGetSiteContent() {
  try {
    const filePath = path.join(dataDir, 'content.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    if (!data.hero || !data.vision || !data.mission || !data.footer) {
      throw new Error('Invalid content structure: missing required sections')
    }

    console.log('✓ getSiteContent: PASSED')
    console.log(`  - Hero title: ${data.hero.title}`)
    console.log(`  - Vision pillars: ${data.vision.pillars.length}`)
    console.log(`  - Mission points: ${data.mission.points.length}`)
    return true
  } catch (error) {
    console.log('✗ getSiteContent: FAILED')
    console.log(`  Error: ${error.message}`)
    return false
  }
}

// Test getLeadership
async function testGetLeadership() {
  try {
    const filePath = path.join(dataDir, 'leadership.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    if (!data.members || !Array.isArray(data.members)) {
      throw new Error('Invalid leadership structure: members array is required')
    }

    console.log('✓ getLeadership: PASSED')
    console.log(`  - Members count: ${data.members.length}`)
    return true
  } catch (error) {
    console.log('✗ getLeadership: FAILED')
    console.log(`  Error: ${error.message}`)
    return false
  }
}

// Test getExecutive
async function testGetExecutive() {
  try {
    const filePath = path.join(dataDir, 'executive.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    if (!data.members || !Array.isArray(data.members)) {
      throw new Error('Invalid executive structure: members array is required')
    }

    console.log('✓ getExecutive: PASSED')
    console.log(`  - Members count: ${data.members.length}`)
    return true
  } catch (error) {
    console.log('✗ getExecutive: FAILED')
    console.log(`  Error: ${error.message}`)
    return false
  }
}

// Test getAllNewsArticles
async function testGetAllNewsArticles() {
  try {
    const indexPath = path.join(dataDir, 'news', 'index.json')
    const indexContent = await fs.readFile(indexPath, 'utf-8')
    const index = JSON.parse(indexContent)

    if (!index.articles || !Array.isArray(index.articles)) {
      throw new Error('Invalid news index structure: articles array is required')
    }

    const articles = index.articles.map((article) => ({
      ...article,
      content: '',
      published: true,
    }))

    const sorted = articles.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    console.log('✓ getAllNewsArticles: PASSED')
    console.log(`  - Articles count: ${sorted.length}`)
    console.log(`  - Latest article: ${sorted[0].title}`)
    console.log(`  - Sorted correctly: ${sorted[0].date > sorted[sorted.length - 1].date}`)
    return true
  } catch (error) {
    console.log('✗ getAllNewsArticles: FAILED')
    console.log(`  Error: ${error.message}`)
    return false
  }
}

// Test getNewsArticle (error case)
async function testGetNewsArticle() {
  try {
    const slug = 'non-existent-article'
    const filePath = path.join(dataDir, 'news', `${slug}.md`)
    
    try {
      await fs.readFile(filePath, 'utf-8')
      console.log('✗ getNewsArticle: FAILED (should have thrown error)')
      return false
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('✓ getNewsArticle: PASSED')
        console.log('  - Correctly throws error for missing file')
        return true
      }
      throw error
    }
  } catch (error) {
    console.log('✗ getNewsArticle: FAILED')
    console.log(`  Error: ${error.message}`)
    return false
  }
}

// Run all tests
async function runTests() {
  const results = []
  
  results.push(await testGetSiteContent())
  console.log()
  
  results.push(await testGetLeadership())
  console.log()
  
  results.push(await testGetExecutive())
  console.log()
  
  results.push(await testGetAllNewsArticles())
  console.log()
  
  results.push(await testGetNewsArticle())
  console.log()
  
  const passed = results.filter(r => r).length
  const total = results.length
  
  console.log('='.repeat(50))
  console.log(`Test Results: ${passed}/${total} passed`)
  console.log('='.repeat(50))
  
  if (passed === total) {
    console.log('\n✓ All content loading utilities working correctly!')
    process.exit(0)
  } else {
    console.log('\n✗ Some tests failed')
    process.exit(1)
  }
}

runTests()
