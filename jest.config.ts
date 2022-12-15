import type { Config } from 'jest'

const config: Config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
}

export default config
