import { StyleSheet } from 'react-native';

/**
 * Shared styles used across multiple screens and components
 */
export const SharedStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Page Header
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 4,
  },

  // List styles
  listContent: {
    padding: 16,
  },
  listContentVertical: {
    paddingVertical: 16,
  },
  emptyListContent: {
    flex: 1,
    justifyContent: 'center',
  },

  // Empty state
  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
  },

  // Cards
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },

  // Text
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.5,
  },
  smallTimestamp: {
    fontSize: 11,
  },
});

