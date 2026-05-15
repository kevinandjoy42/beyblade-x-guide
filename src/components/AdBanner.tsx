import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { colors } from '../utils/theme';

type AdSize = 'banner' | 'inline' | 'sidebar';

interface Props {
  size?: AdSize;
  slot?: string;
}

const HEIGHT: Record<AdSize, number> = {
  banner: 60,
  inline: 100,
  sidebar: 250,
};

const ADS_ENABLED = false;

export default function AdBanner({ size = 'banner', slot }: Props) {
  if (!ADS_ENABLED) return null;

  if (Platform.OS === 'web' && slot) {
    return (
      <View style={[styles.container, { minHeight: HEIGHT[size] }]}>
        <View
          // @ts-ignore – web-only dangerouslySetInnerHTML
          dangerouslySetInnerHTML={{
            __html: `
              <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="${slot}"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            `,
          }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.placeholder, { minHeight: HEIGHT[size] }]}>
      <Text style={styles.placeholderText}>AD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderStyle: 'dashed',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 18,
  },
  placeholderText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 2,
  },
});
